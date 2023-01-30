const Register = require("./registerModel");
const sendEmail = require("./sendEmail")
//register
exports.createStudent = async function (req, res) {
  const student = req.body;
  const emailExist = await Register.findOne({email:student.email});
  if (emailExist)
    return res.status(400).json("Student Already Exist. Please Login");
    try {
      const Student = await Register.create(
        {
          firstName: student.firstName,
          lastName: student.lastName,
          email: student.email,
          phoneNumber: student.phoneNumber,
          courses: student.courses,
          additionalInformation: student.additionalInformation,
        })
        sendEmail("devolubusola@gmail.com", Student)
        return res.status(201).json({ message: "new student created", Student });
      
      } catch (error) {
      return res.status(500).json({ message: error });
      
    }
};
