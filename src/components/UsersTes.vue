<template>
  <div>
    <ul>
      <li v-bind="userList" v-for="item in usersList">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import User_Service from "../services/user_service";

export default {
  name: "UsersTes",
  data: {
    usersList: []
  },
  data() {
    return {
      usersList: []
    };
  },
  methods: {},
  mounted() {
    User_Service.listar().then(res => {
      console.log("aqii");
      console.log(res.data);
      this.usersList = res.data;
    });
  }
};
</script>
