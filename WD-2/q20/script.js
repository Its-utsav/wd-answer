$(document).ready(function () {
  $("body").prepend(`
        <div class="container mt-3">
        <header>
        <h1 class="bg-primary h1 text-center p-2 text-white">
          Online Movie Booking OOA Cinemas
        </h1>
      </header>
    </div>`)
  $("#goback").click(function () {
    window.history.back();
  });
})