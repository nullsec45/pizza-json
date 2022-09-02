let menus="";
function allMenu(){
  $.getJSON("data/pizza.json", function(data){
    menus=data.menu;
    $.each(menus, function(i, data){
    $("#daftar-menu").append(`
       <div class="col-md-4">
        <div class="card mb-3">
            <img src="img/menu/${data.gambar}" class="card-img-top img-fluid" alt="american-favourite">
            <div class="card-body">
                <h5 class="card-title">${data.nama}</h5>
                <p class="card-text">${data.deskripsi}</p>
                <h5 class="card-title">${data.harga}</h5>
                <a href="#" class="btn btn-primary">Pesan sekarang</a>
            </div>
        </div>
      </div>    
    `);
    });
  })
}
allMenu()


$((".nav-link")).on("click", function(){
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori=$(this).html();
  $("h1").html(kategori );

  if(kategori === "All Menu"){
   allMenu();
   return;
  }

  let konten="";

  $.each(menus, function(i, data){
    if(data.kategori === kategori.toLowerCase()){
      konten += `<div class="col-md-4">
      <div class="card mb-3">
          <img src="img/menu/${data.gambar}" class="card-img-top img-fluid" alt="american-favourite">
          <div class="card-body">
              <h5 class="card-title">${data.nama}</h5>
              <p class="card-text">${data.deskripsi}</p>
              <h5 class="card-title">${data.harga}</h5>
              <a href="#" class="btn btn-primary">Pesan sekarang</a>
          </div>
      </div>
    </div>`
    }
    $("#daftar-menu").html(konten);
  })
})