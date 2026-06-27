import zipfile
import xml.etree.ElementTree as ET
import os

def docx_to_text(docx_path, txt_path):
    try:
        # docx is a zip file
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            # Namespaces
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_parts = []
            # Gather all elements under document body to preserve order
            for child in root.iter():
                if child.tag.endswith('p'): # Paragraph
                    p_text = []
                    for text in child.iter():
                        if text.tag.endswith('t') and text.text:
                            p_text.append(text.text)
                    if p_text:
                        text_parts.append(''.join(p_text))
                    else:
                        text_parts.append('') # Empty line for spacing
                elif child.tag.endswith('tbl'): # Table
                    for row in child.iter():
                        if row.tag.endswith('tr'):
                            row_text = []
                            for cell in row.iter():
                                if cell.tag.endswith('tc'):
                                    cell_text = []
                                    for text in cell.iter():
                                        if text.tag.endswith('t') and text.text:
                                            cell_text.append(text.text)
                                    row_text.append(''.join(cell_text))
                            if any(row_text):
                                text_parts.append(' | '.join(row_text))
            
            with open(txt_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(text_parts))
            print(f"Successfully converted {docx_path} to {txt_path}")
    except Exception as e:
        print(f"Error converting {docx_path}: {e}")

# Convert files
downloads = r"C:\Users\tales\Downloads"
scratch = r"c:\Users\tales\Downloads\Hozify_Admin\Hozify_Admin (2)\scratch"
os.makedirs(scratch, exist_ok=True)

docx_to_text(os.path.join(downloads, "HOZIFY ADMIN APPLICATION Final Docx.docx"), os.path.join(scratch, "hozify_admin_app_final.txt"))
docx_to_text(os.path.join(downloads, "Hozify Admin Panel SOW.docx"), os.path.join(scratch, "hozify_admin_panel_sow.txt"))
docx_to_text(os.path.join(downloads, "HOZIFY Role Based Login & Access Flow.docx"), os.path.join(scratch, "hozify_role_based_login_flow.txt"))
