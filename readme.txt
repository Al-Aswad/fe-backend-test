Requirement

-XAMPP
-Composer
-NPM
-php min:8.0

Langkah-langkah menjalankan todolist app

A. Backend

	1. create database dengan nama todolist_db
	2. buka project be-todolist
	3. buka terminal lalu jalankan perintah "composer update"
	4. Jalankan lagi perintah pada terminal "php artisan migrate" 
	5. Jalankan be-todolist "php artisan serve"

B. Frontend

	1. buka project fe-todolist
	2. sesuaikan environment NEXT_PUBLIC_API_URL pada file .env sesuai dengan base url yangada pada be-todolist
	2. buka terminal lalu jalankan perintah "npm install"
	
	