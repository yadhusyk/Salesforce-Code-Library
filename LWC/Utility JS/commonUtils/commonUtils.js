const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
};

const toUpperCase = (str) => {
    return str ? str.toUpperCase() : '';
};

const calculateSum = (a, b) => {
    return a + b;
};

// Export all functions
export {
    formatDate,
    toUpperCase,
    calculateSum
};