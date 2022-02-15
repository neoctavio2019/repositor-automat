
Feature: Pagina de registro


  @issue=TEST-1
  Scenario: Happy Path
    Given Abro el portal password
     Then Espero 3 segundos
     Then Ingreso length 8
     Then Espero 2 segundos
     Then Selec uso letras
     Then Espero 2 segundos
     Then Selec uso números
     Then Espero 2 segundos
     Then Selec uso símbolos
     Then Espero 2 segundos
     Then Presiona generar
    
