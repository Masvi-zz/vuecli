<template>
  <div class="container">
    <p class="lead">Testando framework vuejs com um cadastro simples de usuários</p>

    <div class="row">
      <div class="col-6">
        <h4>Cadastro:</h4>
        <div class="form-group">
          <label>Nome</label>
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label>Senha</label>
          <input v-model="password" type="text" class="form-control" />
        </div>
        <div class="form-group pull-right">
          <button class="btn btn-success" @click.prevent.stop="createUser()">Salvar</button>
        </div>
      </div>

      <div class="col-6">
        <h4>usuários:</h4>
        <table id="mytable" class="table table-bordred table-striped">
          <thead>
            <th>Nome</th>
            <th>Ações</th>
          </thead>
          <tbody>
            <tr v-for="item in usersList">
              <td>{{item.name}}</td>
              <td>
                <p data-placement="top" data-toggle="tooltip" title="Edit">
                  <button
                    class="btn btn-primary btn-sm"
                    data-title="Edit"
                    data-toggle="modal"
                    data-target="#edit"
                  >
                    <span class="button btn-sm" @click.prevent.stop="updateUser(item.id)">Alterar</span>
                  </button>
                </p>
              </td>
              <td>
                <p data-placement="top" title="Delete">
                  <button class="btn btn-danger btn-sm" data-title="Delete" data-target="#delete">
                    <span class="button btn-sm" @click.prevent.stop="deleteUser(item.id)">Deletar</span>
                  </button>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/userService";

export default {
  name: "UserRegistration",

  data() {
    return {
      name: " ",
      email: " ",
      password: " ",

      usersList: []
    };
  },
  filters: {
    findUser(id) {
      return this.usersList.filter(m => m.id.indexOf(id));
    }
  },
  methods: {
    createUser() {
      let res = UserService.createUser({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(res => {
        this.getUsers();
        this.clearForm();
      });
    },

    updateUser(id) {
      console.log("update: " + id);
      this.usersList.filter(item => {
        if (item.id == id) {
          this.name = item.name;
          this.email = item.email;
          this.password = item.password;
        }
      });
    },

    clearForm() {
      (this.name = " "), (this.email = " "), (this.password = " ");
    },

    deleteUser(id) {
      let res = UserService.delete(id).then(res => {});
    },

    getUsers() {
      UserService.listUsers().then(res => {
        this.usersList = res.data;
      });
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>

