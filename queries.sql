-- Database Queries

-- Find all customers with postal code 1010
Select CustomerName, Country, City, PostalCode
From Customers 
Where PostalCode = 1010

-- Find the phone number for the supplier with the id 11
Select SupplierID, SupplierName, ContactName, Phone
From Suppliers
Where SupplierID = 11

-- List first 10 orders placed, sorted descending by the order date
Select *
From Orders
Where OrderID < 10258
ORDER BY OrderDate DESC
LIMIT = 10

-- Find all customers that live in London, Madrid, or Brazil
Select CustomerID, ContactName, City, Country
From Customers
Where City = 'London' or City ='Madrid' or City = 'Brazil'

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO [CUSTOMERS] (CustomerName, Address, City, PostalCode, Country)
VALUES ('Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', 111, 'Middle Earth')

-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE[CUSTOMERS]
SET PostalCode = 11122
Where CustomerID = 92

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT DISTINCT City
FROM Customers

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT SupplierID, SupplierName, LEN(SupplierName) as NameLength
FROM Suppliers
WHERE LEN(SupplierName) > 20