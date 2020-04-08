# WEB-PetShop
Trabalho para a disciplina SCC0219 - Introduction to Web Development - 2020

## A Pet Shop
### Group:  Luís Peres, Marcelo Duchene, Michelle Wingter
   
A pet store or pet shop is a retail business which sells different kinds of animals to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums. Some pet stores provide engraving services for pet tags, which have the owner’s contact information in case the pet gets lost.
In the USA and Canada, pet shops often offer both hygienic care (such as pet cleaning) and esthetic services (such as cat and dog grooming). Some pet stores also provide tips on training and behavior, as well as advice on pet nutrition.

### Overview
You are a software developer. One of your clients hired you to create a web application for his pet shop. His shop sells pets, pet supplies and services (grooming, vaccination, etc). The web application is going to manage pets and products sold, services allocation and inventory. It also controls the clients and services they schedule in the store.

### Requirements
* The system must have 2 types of users: Clients and Administrators
   * Administrators are responsible for registering/managing administrators, customers, and provided products/services. The application already comes with an account admin with password admin.
   * Customers are users who access the system for animal registration, scheduling, purchase of products.
* The admin log includes, at least: name, id, photo, phone, email.
* Each customer's record includes, at least: name, id, address, photo, phone, email
* Each pet is registered under an owner (customer). It includes name, id, photo, race, age.
* Product records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold. Products can be, for example: dog/cat food, houses, toy bones, collars, etc.
* Registration services include, at least: name, id, photo, description, price.
* Customers can schedule a web time for services, using a calendar:
   * The calendar should display free slot windows for use. Customers cannot cancel a time.
   * The calendar should cover a minimum of 10 weeks with (at least) 10 slots per day.
   * Busy hours show the name and photo of the service and the animal name of the customer who made the reservation.
   * Each free slot must show a service or empty. It is possible to have more than one service per slot. But I recommend doing only one service per slot.
* Selling Products: Products are selected, their quantity chosen and are included in a cart. Products are purchased using a credit card number. The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
* Selling Services: Services are selected and paid upon hire with a card number. 
* Administrators can view and edit all products (they can change the stock quantity, for example) and services. 
* Product / Service Management: Administrators can create new products and services.
* Earnings screen: Shows a list of all service and product sales and the total by service and product.

