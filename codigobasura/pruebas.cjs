import bcrypt from "bcrypt";

const bcrypt = require('bcrypt');

const password = 'admin123'; // La contraseña que deseas hashear

// Genera un salt aleatorio y luego genera el hash
bcrypt.genSalt(10, function(err, salt) {
  if (err) {
    console.error(err);
  } else {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        console.error(err);
      } else {
        console.log('Hash de contraseña:', hash);
      }
    });
  }
});
