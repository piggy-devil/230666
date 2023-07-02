// {
//     _id: ObjectId("61521c8675c0c97a85703e43"),
//     purchaseDate: ISODate("2023-06-01T10:30:00Z"),
//     item: {
//       name: "พระเครื่องเงินแท้วัดโพธิ์",
//       temple: "วัดโพธิ์",
//       model: "รุ่น A123",
//       material: "เนื้อผง",
//       yearBuilt: 2565,
//       type: "พระบูชา",
//       status: "เพื่อขาย"
//     },
//     purchasePrice: 5000,
//     seller: "นายสมชาย",
//     saleDate: ISODate("2023-06-05T14:45:00Z"),
//     salePrice: 8000,
//     buyer: "นางสาวสมหญิง"
//     // ข้อมูลอื่นๆ ที่เกี่ยวข้อง
//   }
const mongoose = require('mongoose');

const praSchema = new mongoose.Schema(
  {
    item: {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    purchase: {
      purchasePrice: {
        type: Number,
      },
      purchaseDate: {
        type: Date,
      },
      seller: {
        type: String,
      },
    },
    sale: {
      salePrice: {
        type: Number,
      },
      saleDate: {
        type: Date,
      },
      buyer: {
        type: String,
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    //   select: false,
    // },
  },
  { timestamps: true }
);

const Pra = mongoose.model('Pra', praSchema);

module.exports = Pra;
