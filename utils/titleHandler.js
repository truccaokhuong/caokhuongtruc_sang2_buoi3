module.exports = {
    ConvertTitleToSlug: function (title) {
        let result = title.toLowerCase();
        // Thay thế các kí tự đặc biệt bằng dấu gạch ngang
        result = result.replace(/[^\w\s-]/g, '');
        // Thay thế khoảng trắng bằng dấu gạch ngang
        result = result.replaceAll(' ', '-');
        // Loại bỏ các dấu gạch ngang liên tiếp
        result = result.replace(/-+/g, '-');
        // Loại bỏ dấu gạch ngang ở đầu và cuối
        result = result.trim().replace(/^-+|-+$/g, '');
        return result;
    }
}
