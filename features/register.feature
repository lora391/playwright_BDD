Feature: Register user functionality


@regression
Scenario: Valid registration
   Given user is in registration page or form
   When user registers with valid details
   Then user should be successfully registered and see the valid message
@smoke
Scenario: register button disabled
   Given user is in registration page or form
   When user does not enter email or password and click on register
   Then valid error message should be displayed
@smoke
Scenario: register button stays disabled with weak or empty password
  Given user is in registration page or form
  When user registers with valid email and weak or empty password
  Then register button should be disabled

