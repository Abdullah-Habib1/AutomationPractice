$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC1_CreateUserAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create New User Account",
  "description": "I want to Create New User Account",
  "id": "create-new-user-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check Create New User Account",
  "description": "",
  "id": "create-new-user-account;check-create-new-user-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Register With the New Account Email",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Fill The Presonal Information",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The registration page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateUseAccount.user_in_home_page()"
});
formatter.result({
  "duration": 11593628200,
  "status": "passed"
});
formatter.match({
  "location": "CreateUseAccount.user_register_with_the_new_account_email()"
});
formatter.result({
  "duration": 551090700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUseAccount.user_fill_the_presonal_information()"
});
formatter.result({
  "duration": 6828978300,
  "status": "passed"
});
formatter.match({
  "location": "CreateUseAccount.the_registration_page_displayed_successfully()"
});
formatter.result({
  "duration": 2990980701,
  "status": "passed"
});
formatter.uri("TC2_CardCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "Cart Checkout scenario",
  "description": "I want to Test full cycle of items checkout",
  "id": "cart-checkout-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Cart Checkout scenario",
  "description": "",
  "id": "cart-checkout-scenario;cart-checkout-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User In Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Login With Authorized Account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Select Product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User compelet check out steps with bank wire option",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The orede added to orders List",
  "keyword": "Then "
});
formatter.match({
  "location": "CardCheckout.user_in_home_page()"
});
formatter.result({
  "duration": 3399996700,
  "status": "passed"
});
formatter.match({
  "location": "CardCheckout.user_login_with_authorized_account()"
});
formatter.result({
  "duration": 3018814501,
  "status": "passed"
});
formatter.match({
  "location": "CardCheckout.user_select_product()"
});
formatter.result({
  "duration": 9264868501,
  "status": "passed"
});
formatter.match({
  "location": "CardCheckout.user_compelet_check_out_steps_with_bank_wire_option()"
});
formatter.result({
  "duration": 21955324399,
  "status": "passed"
});
formatter.match({
  "location": "CardCheckout.the_oreder_added_to_orders_list()"
});
formatter.result({
  "duration": 2447457300,
  "status": "passed"
});
});