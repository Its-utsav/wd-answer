$(document).ready(function () {
  $("body").prepend(`
        <div class="container mt-3">
        <header>
        <h1 class="bg-primary h1 text-center p-2 text-white">
          Online Movie Booking OOA Cinemas
        </h1>
      </header>
    </div>`)

  $("head").append(`<style> 
    body {
      background-color: #f8f9fa;
    }
    .form-group label {
      font-weight: bold;
    }
    .btn {
      width: 100%;
    }  
    </style>`)
})