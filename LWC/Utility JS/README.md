# 🔄 Salesforce LWC Utility Module Example

This repository demonstrates how to create and use **JavaScript utility modules** in Salesforce **Lightning Web Components (LWC)**.  
By centralizing reusable logic into a shared `commonUtils.js`, you can avoid code duplication and make your project easier to maintain.

---

- **`commonUtils`** → Utility module with shared JavaScript functions.  
- **`commonUtilsExample`** → A sample LWC showing how to use the utility module.

---

## ⚡ Utility Module (`commonUtils.js`)

```javascript
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

export function toUpperCase(str) {
    return str ? str.toUpperCase() : '';
}

export function calculateSum(a, b) {
    return Number(a) + Number(b);
}

Functions exported here can be imported and reused across multiple LWCs.