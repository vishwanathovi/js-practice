# Todos

1. Cart functionality
	- Cart total need to be added

2. CSS improvements
	- Product card display improvement - Done
	- Cart product card improvement

Next phase:
1. Adopt redux part into the application - Done
2. Clean-up the code and comment properly - Done
3. Apply basic routing to display individual products and cart page


Learnings:
1. setState is always async
2. Never use normal functions within react components. This will messup "this". 

Still needs to be discussed:
1. Avoiding Product, ProductInner issue & Key issue faced

# React-redux pending things:
1. Create Shelf component and place Products, Order & Count within that
2. 


# CSS pending things:
1. Cart 
	- Product details section
			- Clean-up structuring
			- Correct the Cost format
			- Show other details
			- OnHover in remove, strikeout the content
	- Checkout
			- Add total amount and installment options
			- Match the color scheme and design of checkout button to match with product button
			- Add alert on click of checkout button
	- Other
			- Change the scroll bar to match with the theme of the cart

2. Responsive
	- Make the cart supportive in the mobile devices
	- Make the product cards to look good in mobile view

3. Main section
	- Fix product length issue in tablet view
	- Split the overall space according to % rather than Grid approach

4. Structuring
	- Convert all code to SCSS
	- Split the code according to the components