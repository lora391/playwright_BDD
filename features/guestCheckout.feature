Feature: Guest user checkout

Background:
  Given user is on the Product Listing Page
  @plp @regression
Scenario: Add product to cart from PLP
  When user adds a product to the cart from PLP
  Then product should be added to the cart successfully
  And cart icon should show correct product count
  @pdp @regression
Scenario: Add product to cart from PDP
  When user navigates to the PDP from PLP
  Then product details should be correct in PDP
  When user adds the product to the cart from PDP
  Then product should be added to the cart successfully from PDP
    #And cart icon should show correct product count

  #Scenario: Guest user completes checkout
   # Given user has a product in the cart
    #When user goes to the cart page
    #Then product should be visible in the cart
    #And price and total should be correct

    #When user proceeds to the checkout page
    #Then product, quantity, and price should be correct

    #When user fills in address details
    #And selects payment method
    #And places the order
    #Then order should be placed successfully
    #And order details page should display correct order summary