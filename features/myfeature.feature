
Feature: Pagina de registro


  @issue=TEST-1
  Scenario: Happy Path
    Given Abro el portal pago en linea guanajuato
    Then Hago click en seleccionar un valor
    Then Espero 5 segundos
    Then Selecciono buscar por placa
    Then Espero 5 segundos
    Then Ingreso texto placa
    Then Hago click obtener datos infaccion
    Then Espero 8 segundos
    Then Cierro navegador
    
