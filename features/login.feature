Feature: Login Functionality

Scenario Outline: Valid log in
  Given user is in login page or form
  When user login with valid email "<email>" and password "<password>"
  Then user should be logged in or get valid message "<result>"

  Examples:
      | email                   | password         | result                        |
      | sa@b.com                | Playwright!987    | Hello sa2                       |
      | sa@b.com                | WrongPass         | The password you entered for the username sa@b.com is incorrect           |
      | validuser@example.com   |                   | Password is required.         |
      |                         | somepass          | Username is required.             |
      |                         |                   | Username is required.         |