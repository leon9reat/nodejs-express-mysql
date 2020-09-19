const sql = require("./db");

// constructor
const Constumer = function(customer) {
    this.idKonsumen = customer.idKonsumen;
    this.idApotik = customer.idApotik;
    this.idGrupKonsumen = customer.idGrupKonsumen;
    this.nmKonsumen = customer.nmKonsumen;
    this.noRekamMedis = customer.noRekamMedis;
    this.tglLahir = customer.tglLahir;
    this.alamat = customer.alamat;
    this.kota = customer.kota;
    this.noHp = customer.noHp;
    this.email = customer.email;
    this.isActive = customer.isActive;
    this.insertedAt = customer.insertedAt;
    this.insertedBy = customer.insertedBy;
    this.updatedAt = customer.updatedAt;
    this.updatedBy = customer.updatedBy;    
};

Constumer.getAll = result => {
    sql.query("SELECT * FROM mas_konsumen", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("customer: ", res);
        result(null, res);
    });
};

module.exports = Constumer;