UPDATES AS OF MAY 7, 2024 : 

To access python miniconda interpreter  
* Ctrl + Shift + P or type in the search bar >Python Select Interpreter
![alt text](image.png)

* You should have existing environment in order to use it then click (Env Name) 
![alt text](image-1.png)

* then wait for it in the bottom left to load then close all your terminals then open a new terminal
![alt text](image-2.png)

* check if you're in the right path or go cd webdev & cd backend 
![alt text](image-3.png)

* after do  'pip install fastapi uvicorn mysql-connector-python' (in my case I have already Downloaded it)
![alt text](image-4.png) 

* uvicorn main:app --reload
![alt text](image-5.png)

* ctrl + click link
![alt text](image-6.png)

* This will pop up 
![alt text](image-7.png)

* simply add the link http://127.0.0.1:8000/docs
![alt text](image-8.png)

WELCOME TO FASTAPI!!!

IN CreateBorrowTransaction: 

from datetime import datetime, timedelta (Insterted at the top of the code)

I imported timedelta from the datetime module to add 5 days to the BorrowedDateTime.
The BorrowedDateTime parameter is converted to a datetime object using strptime to perform date arithmetic.
I added timedelta(days=5) to calculate the Deadline, which is 5 days after the BorrowedDateTime.
The Deadline is inserted into the borrowedtransaction table along with other transaction details.

