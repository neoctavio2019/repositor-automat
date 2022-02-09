const { Then, Given } = require('@cucumber/cucumber');

  Given('Abro el portal pago en linea guanajuato',{timeout: 60 * 1000}, function() {
  return this.driver.get('https://pagosenlinea.guanajuato.gob.mx/movilidad');
  });
  Then('Abro el form-angular',{timeout: 60 * 1000}, function() {
    return this.driver.get('http://localhost:4200/');
    });
  Then('Hago click en seleccionar un valor',{timeout: 60 * 1000}, function () {
   return this.driver.findElement({id:"lstOpcionesBusqueda"}).click();
  });
  Then('Selecciono buscar por placa',{timeout: 60 * 1000}, function () {
    return this.driver.findElement({xpath:"/html/body/div[7]/div[1]/div[2]/form[2]/div[1]/div[1]/div/div[1]/select/option[2]"}).click();
  });
  Then('Hago click obtener datos infaccion',{timeout: 60 * 1000}, function () {
    return this.driver.findElement({xpath:"/html/body/div[7]/div[1]/div[2]/form[2]/div[1]/div[1]/div/div[2]/button"}).click();
  });
  Then('Ingreso texto placa',{timeout: 60 * 1000}, function () {
    return this.driver.findElement({id:"txtCampoBusqueda"}).sendKeys("361RJ5");
    });
  Then('Espero {int} segundos',{timeout: 60 * 1000}, function (int1) {
  return this.driver.sleep(int1*1000)
  });
  Then('Cierro navegador', function(){
    return this.driver.close()
  })
  Then('Selecciono {genero} como mi genero',{timeout: 60 * 1000}, function (str1) {
    if (str1 == "masculino"){
      return this.driver.findElement({id:"male"}).click();
    }
    else{
      return this.driver.findElement({id:"female"}).click();
    }
  });


  
  Then('Ingreso mi segundo nombre',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"middleName"}).sendKeys("Nombredos");
  });
  Then('Ingreso mi apellido paterno',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"lastName"}).sendKeys("ApellidoP");
  });
  Then('Ingreso mi apellido materno',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"secondLastName"}).sendKeys("ApellidoM");
  });
  Then('Ingreso mi RFC',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"rfc"}).sendKeys("TEST950915AA0");
  });
  Then('Ingreso mi correo electronico',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"email"}).sendKeys("eric.pereyra@icloud.com");
  });
  Then('Confirmo mi correo electronico',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"confirmEmail"}).sendKeys("eric.pereyra@icloud.com");
  });
  Then('Ingreso mi celular',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"mobilePhone"}).sendKeys("5555555555");
  });
  Then('Ingreso mi contrasena',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"password"}).sendKeys("TestPassword123");
  });
  Then('Confirmo mi contrasena',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"confirmPassword"}).sendKeys("TestPassword123");
  });
  Then('Ingreso mi ano de nacimiento',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"year"}).sendKeys('1995');
  });
  Then('Ingreso mi mes de nacimiento',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"month"}).sendKeys("Septiembre");
  });
  Then('Ingreso mi dia de nacimiento',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"day"}).sendKeys("15");
  });
  Then('Acepto los terminos y condiciones',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"conditions"}).click();
  });
  Then('Hago click en el boton "siguiente"',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"goToNextForm"}).click();
  });
  Then('Selecciono mi pais de nacimiento',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"countryOfBirth"}).sendKeys('MEXICO');
  });
  Then('Selecciono mi nacionalidad',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"nationality"}).sendKeys('MEXICANA');
  });
  Then('Ingreso mi codigo postal',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"cp"}).sendKeys('03400');
  });
  Then('Selecciono un pais',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"country"}).sendKeys('MEXICO');
  });
  Then('Selecciono un estado',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({css:"#state > option:nth-child(7)"}).click();
  });
  Then('Selecciono una delegacion',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({css:"#delegation > option:nth-child(4)"}).click();
  });
  Then('Selecciono una colonia',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({css:"#colony > option:nth-child(5)"}).click();
  });
  Then('Ingreso mi calle',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"street"}).sendKeys('Bolivar');
  });
  Then('Ingreso mi numero exterior',{timeout: 60 * 1000}, function () {
  return this.driver.findElement({id:"outdoorNumber"}).sendKeys('613');
  })
