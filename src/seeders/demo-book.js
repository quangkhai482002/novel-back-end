"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Book",
      [
        {
          bookID: 1,
          writerID: 1,
          bookName: "Cầu ma",
          author: "Nhĩ Căn",
          writer: "Nhĩ Căn",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhegpPNPQyfEAJtmb5QFa3gjZZjHjVRpOCWA&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Tiên hiệp ",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 2,
          bookName: "Ta theo hệ chữa trị trò chơi",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA5L-BqlT7_nZ2rdyPwsN2IyvjnHdWxYj0w6xB9ay87meEjqeda_i10fr_VkaRaPzejE&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Võng du",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 3,
          writerID: 1,
          bookName: "Ta có một tòa kinh khủng phòng",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKUoKKD67-iFRgreaWoD8DztjHW7AMSggydwg_jTW6lue8oLxCnf0yTbBO0OV86PiTbw&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Khoa học",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 4,
          writerID: 1,
          bookName: "Đạo quỷ dị tiên",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWfMeHk1patn69dUQ4N5nNvpjAUedCczWkkhAvQpARX6IyKkr9U5ZJAzM-PabEnbg7M&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Tiên hiệp",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 5,
          writerID: 1,
          bookName: "Cổ chân nhân",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://jesusful.com/ebooks/wp-content/uploads/2023/03/Reincarnated-with-the-Strongest-System-webnovel.jpg",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Ngôn tình",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 6,
          writerID: 1,
          bookName: "Nhất niệm vĩnh hằng",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVoHV1sbOYwUcbs3VSWnenMyuemYr56Sh0A&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Huyền huyễn",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 7,
          writerID: 1,
          bookName: "Linh cảnh hành giả",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLvzrKESPLTFFmRyjoQtPpGpKdsMoCKZTAyeFZvnPjD0TyAPjXXtY-l9WuZw0QCxVjwQ&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Khoa học  ",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 8,
          writerID: 1,
          bookName: "Quang âm chi ngoại",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaVv_y8GMZrPyp7YWd4Ok0_1wHqZQ5VriE_oV95lpbiEFEArQvnXwxj68bPLIzk9E88U&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Kì ảo",
          follow: 100,
          vote: 1000,
        },
        // {
        //   bookID: 9,
        //   writerID: 1,
        //   bookName: "Quang âm chi ngoại",
        //   author: "Paulo Coelho",
        //   writer: "Paulo Coelho",
        //   ratting: 4.5,
        //   poster:
        //     "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
        //   view: 1000,
        //   desciption:
        //     "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
        //   tag: "Adventure",
        //   follow: 100,
        //   vote: 1000,
        // },
        {
          bookID: 10,
          writerID: 1,
          bookName: "Thâm hải dư tẫng",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMU8lXXJbMIH8aq_j-thnEk6R9_NrShoVmS66vfbY3tjkOxIBU_PGGXJmnWb7NCUHDxws&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Võng du",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 11,
          writerID: 1,
          bookName: "Túc mệnh chi hoàn",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceqgWo6ICouOeVAbyzrrCbXeakRp4YQm6Z5IsOTh1x-19kS83BB9AbFX3HfJzrYasHsg&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Lịch sử",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 12,
          writerID: 1,
          bookName: "Tiên nghịch",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgK4QteMlYJ4p_AQoqS6KXh_UcisUWNZ0pefn4lXHFfoyxR9tSiojpn13flHdebZqLREM&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Tiên hiệp",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 13,
          writerID: 1,
          bookName: "Long thần truyền thuyết",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4gHK3BVUCsMqTD5U4bHG9yPOfnzc2u8QvdEf3OQcoe83zLdAm_ptJJ144Q17x7uqQ-Q&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Huyền huyễn",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 14,
          writerID: 1,
          bookName: "Thâm không bỉ ngạn",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV67EK9ke4CyxwmnykdYHBrbKG-iDHqufFiOjJC_CwDhUrqGBBHOCLQkv-7W99Io_eIqI&usqp=CAU",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Ngôn tình",
          follow: 100,
          vote: 1000,
        },
        {
          bookID: 15,
          writerID: 1,
          bookName: "The Alchemist",
          author: "Paulo Coelho",
          writer: "Paulo Coelho",
          ratting: 4.5,
          poster:
            "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
          view: 1000,
          desciption:
            "Ai đi vào sinh mệnh của ngươi, là do vận mệnh quyết định, ai dừng lại trong sinh mệnh của ngươi, vận mệnh cũng vô pháp quyết định, chân chính có thể quyết định, chỉ có chính mình. Đã không thể quên được, liền dứt khoát không quên, cho dù hết thảy thành không… cho dù, hết thảy trở thành hoàng hôn dư huy, theo đêm tối phủ xuống, tiêu tán không tìm được bóng dáng.",
          tag: "Adventure",
          follow: 100,
          vote: 1000,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
