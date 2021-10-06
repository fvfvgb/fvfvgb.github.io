<template>
    <el-container class="forum-container">
        <el-aside>
            <el-menu router>
                <el-menu-item index="/">
                    <i class="el-icon-user-solid"></i>
                    <template #title>Home</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <i class="el-icon-user-solid"></i>
                    <template #title>About</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-scrollbar style="flex-grow: 1;">
                <el-header>
                    <el-avatar>USER</el-avatar>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<style lang="scss">
html, body, #app, .forum-container {
  width: 100%;
  height: 100%;
}

.forum-container {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
