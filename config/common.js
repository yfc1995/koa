const userTable = "create table if not exists users(id int unsigned auto_increment, name varchar(100) not null, password varchar(100) not null, primary key (id))"
const shopTable = "create table if not exists shops(id int unsigned auto_increment, shopName varchar(100) not null, price int not null, primary key (id))";
const commonts = {
  table: {
    user: userTable,
    shop: shopTable,
  }
}

module.exports = commonts;