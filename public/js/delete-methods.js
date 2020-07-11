var deletarItemAdmin = (id, rev) => {
  console.log('rev=' + rev)
  $.ajax({
    method: "POST",
    url: "",
    datatype: 'json',
    data:{type:"deletarItem", id: id, rev: rev},
    sucess: (res) => {
       deletarItemCallback(res);
    }
  }).done(
    () => {
    alert('item deletado :)');
    changeContent("admin-content");
    admin_getProducts()
    }
  )
}

var deletarUserAdmin = (id, rev) => {
  console.log('rev=' + rev)
  $.ajax({
    method: "POST",
    url: "",
    datatype: 'json',
    data:{type:"deletarUser", id: id, rev: rev},
    sucess: (res) => {
       deletarItemCallback(res);
    }
  }).done(
    () => {
    alert('usuário deletado :)');
    admin_getUsers();
    changeContent("admin-content");
    }
  )
}


var deletarServicoAdmin = (id, rev) => {
  console.log('rev=' + rev)
  $.ajax({
    method: "POST",
    url: "",
    datatype: 'json',
    data:{type:"deletarServico", id: id, rev: rev},
  }).done(
    () => {
    alert('serviço deletado :)');
    changeContent("admin-content");
    admin_getServices();
    }
  )
}

