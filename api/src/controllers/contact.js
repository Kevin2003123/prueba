const { Contact } = require("../db");

const getContacts = async (req, res) => {
  try {
    const { page } = req.query;
    const pageSize = 5;
    const offset = (page -1) * pageSize;
    const limit = pageSize;
    const contacts = await Contact.findAll({ limit, offset });
    const totalContacts = await Contact.count()/5;
    
    res.status(200).json({contacts, page: parseInt(page) || 1, total: totalContacts});

  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getContactById = async(req,res) =>{
    try {
        const {id} = req.params;
        const contact = await Contact.findByPk(id)
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const insertContact = async(req,res) =>{
    try {
        const {name,lastName, phone, address} = req.body
        const contact = await Contact.create({
            name,
            lastName,
            phone,
            address
        })

        res.status(200).json(contact)
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const updateContact = async(req,res) =>{
    try {
        const {id, name,lastName, phone, address} = req.body

        const contact = await Contact.findByPk(id);
         await contact.update({
            name,
            lastName,
            phone,
            address
        })

        res.status(200).json(contact)
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deleteContact = async(req,res) =>{
    try {
        const {id} =req.params;
        const contact = await Contact.findByPk(id);
        await contact.destroy();
        res.status(200).json(contact)
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const fillContact = async (req,res) =>{
    try {

        await Contact.bulkCreate([
            { id: 1, name: "John", lastName: "Doe", phone: "1234567890", address: "123 Main St" },
            { id: 2, name: "Jane", lastName: "Smith", phone: "9876543210", address: "456 Oak St" },
            { id: 3, name: "Bob", lastName: "Johnson", phone: "5551234567", address: "789 Pine St" },
            { id: 4, name: "Alice", lastName: "Williams", phone: "4445556666", address: "101 Maple St" },
            { id: 5, name: "Charlie", lastName: "Brown", phone: "7778889999", address: "202 Birch St" },
            { id: 6, name: "Eva", lastName: "Garcia", phone: "3334445555", address: "505 Cedar St" },
            { id: 7, name: "David", lastName: "Miller", phone: "1112223333", address: "707 Pine St" },
            { id: 8, name: "Emily", lastName: "Taylor", phone: "9998887777", address: "909 Elm St" },
            { id: 9, name: "Frank", lastName: "Harris", phone: "6665554444", address: "303 Oak St" },
            { id: 10, name: "Grace", lastName: "Martin", phone: "2223334444", address: "404 Cedar St" },
            { id: 11, name: "Henry", lastName: "Moore", phone: "5554443333", address: "505 Pine St" },
            { id: 12, name: "Ivy", lastName: "Anderson", phone: "1113335555", address: "606 Maple St" },
            { id: 13, name: "Jack", lastName: "Clark", phone: "9996663333", address: "707 Elm St" },
            { id: 14, name: "Katie", lastName: "Ward", phone: "4446668888", address: "808 Pine St" },
            { id: 15, name: "Leo", lastName: "Carter", phone: "7772225555", address: "909 Birch St" },
            { id: 16, name: "Mia", lastName: "Evans", phone: "2224446666", address: "1010 Oak St" },
            { id: 17, name: "Nathan", lastName: "Cooper", phone: "5556667777", address: "1111 Elm St" },
            { id: 18, name: "Olivia", lastName: "Fisher", phone: "9995554444", address: "1212 Pine St" },
            { id: 19, name: "Paul", lastName: "Baker", phone: "6663331111", address: "1313 Cedar St" },
            { id: 20, name: "Quinn", lastName: "Young", phone: "3335557777", address: "1414 Maple St" },
            { id: 21, name: "Ryan", lastName: "Hill", phone: "7774441111", address: "1515 Oak St" },
            { id: 22, name: "Sara", lastName: "Turner", phone: "1117773333", address: "1616 Elm St" },
            { id: 23, name: "Tom", lastName: "Barnes", phone: "4449996666", address: "1717 Pine St" },
            { id: 24, name: "Uma", lastName: "Reed", phone: "9994441111", address: "1818 Birch St" },
            { id: 25, name: "Vincent", lastName: "Hudson", phone: "6662228888", address: "1919 Cedar St" },
            { id: 26, name: "Wendy", lastName: "Taylor", phone: "2226663333", address: "2020 Maple St" },
            { id: 27, name: "Xander", lastName: "Smith", phone: "5558881111", address: "2121 Oak St" },
            { id: 28, name: "Yara", lastName: "Williams", phone: "1115559999", address: "2222 Elm St" },
            { id: 29, name: "Zach", lastName: "Johnson", phone: "9993336666", address: "2323 Pine St" },
            { id: 30, name: "Ava", lastName: "Davis", phone: "3336669999", address: "2424 Cedar St" }
          ])
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {getContacts, fillContact, insertContact, updateContact, deleteContact, getContactById}
