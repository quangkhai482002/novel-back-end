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
      "Chapter",
      [
        {
          chapterID: 1,
          bookID: 1,
          writerID: 1,
          chapterName: "Tô minh",
          orderNumber: 1,
          content: `Núi! Thanh sơn!
            Đây là một dãy núi lớn liên miên không dứt, như một con rồng còn sống kéo dài cả vùng đất mênh mông này, ở đấy có cỏ cây rậm rạp, còn có tiếng chim thú không ngừng vang lên. Xa xa nhìn lại, có thể thấy trên núi có một phần giống như được năm ngọn núi hợp lại, trông như năm ngón tay người giơ lên trời cao.
            Trong đó có một ngọn núi trung đoạn(1) , một người thiếu niên đang tựa vào một khối đá lớn hơi bị lõm sâu vào để tránh nắng. Bên cạnh hắn có một cái sọt mây, trong đó có dựng một chút dược thảo, mùi thuốc tản phát ra lượn lờ khắp bốn phía.
            Thiếu niên này mi thanh mục tú, nhưng thân thể lại hơi ốm yếu, thoạt nhìn có chút suy nhược. Hắn mặc một cái áo được làm bằng da thú, cổ đeo một vòng thú cốt màu trắng hình trăng lưỡi liềm, đầu tóc rối bù được hắn dùng một sợi dây cây buộc lại. Hắn ngồi ở chỗ đó, tay cầm một quyển sách da do mười tấm da thú dính lại, chăm chú đọc lấy.
            - Tổ tông Man tộc, khai thiên tạo người, di lưu muôn đời đến nay...Vài người có sức mạnh lớn lao được gọi là Man Sĩ (2), họ có thể bay lên trời chui xuống đất, dời núi lấp biển...có Man Văn (3) thông thiên, hái được ngôi sao và nhật nguyệt... Thiếu niên đọc lấy, khẽ thở dài. - Không có Man thể, làm sao trở thành Man...Man Sĩ...Man Sĩ...Tô Minh, ngươi chỉ có thể hái được chút thảo dược, trở thành một y phu tầm thường mà thôi.
            Muốn trở thành Man sĩ ư? Thật xa xôi. Thiếu niên tự chế giễu chính mình, buông cuốn da thú trong tay xuống, nhìn về phương trời xa mà ngơ ngẩn. Hắn đã đọc qua cuốn da thú này rất nhiều lần rồi, nói hắn thuộc nằm lòng cũng không sai chút nào. - Trời là hình tròn, đất là hình vuông, như vô biên, phảng phất vô tận... Trong lúc lẩm bẩm, đầu hắn lại ảo tưởng đến thế giới trong cuốn sách.
            Bất chợt trời đã tối dần mà hắn không hề hay biết, mây đen bắt đầu xuất hiện từ chân trời xa xôi. Gió núi thổi qua mang theo hơi ẩm rơi xuống lá cây các cây cỏ trên núi, phát ra tiếng vang rắc..rắc..
            Đây là một dãy núi lớn liên miên không dứt, như một con rồng còn sống kéo dài cả vùng đất mênh mông này, ở đấy có cỏ cây rậm rạp, còn có tiếng chim thú không ngừng vang lên. Xa xa nhìn lại, có thể thấy trên núi có một phần giống như được năm ngọn núi hợp lại, trông như năm ngón tay người giơ lên trời cao.
            Trong đó có một ngọn núi trung đoạn(1), một người thiếu niên đang tựa vào một khối đá lớn hơi bị lõm sâu vào để tránh nắng. Bên cạnh hắn có một cái sọt mây, trong đó có dựng một chút dược thảo, mùi thuốc tản phát ra lượn lờ khắp bốn phía.
            `,
          audio: "DataTypes.STRING",
          view: 12,
        },
        {
          chapterID: 2,
          bookID: 1,
          writerID: 3,
          chapterName: "Bỗng nhiên quay đầu",
          orderNumber: 2,
          content: `abc
            `,
          audio: "DataTypes.STRING",
          view: 13,
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

// runcode to create this file: npx sequelize-cli seed:generate --name demo-user
// runcode to seed data: npx sequelize-cli db:seed:all
// runcode to undo seed data: npx sequelize-cli db:seed:undo:all
