const fs = require('fs');
const file = 'src/pages/ReferralManagement/ReferralListingPage.jsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  /const handleClearFilters = \(\) => \{\n    setStatusFilter\("All Statuses"\);\n    setCampaignFilter\("All Campaigns"\);\n    setStartDate\(""\);\n    setEndDate\(""\);\n  \};/m,
  `const handleClearFilters = () => {\n    setStatusFilter("All Statuses");\n    setCampaignFilter("All Campaigns");\n    setStartDate("");\n    setEndDate("");\n    addToast("All active filters have been cleared successfully.", "success");\n  };`
);

fs.writeFileSync(file, code);
console.log('ReferralListingPage handleClearFilters updated.');
