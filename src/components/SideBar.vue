<template>
<div class="sidebar is-desktop">
  <div class="title">
    IE
  </div>
  <div class="avatar-group">
    <div class="avatar">
      <IconAvatar />
    </div>
    <div class="user-name">
        {{user}}
    </div>
  </div>
  <div class="actions">
      <div class="actions-title">ACTIONS</div>
      <div class="sub-actions">
        <div v-for="(action, index) in actions"
             :key="index">
          <ActionButton :action="action"
                        @click="navigateTo(action.path)"
                        :class="currentAction===action.path ? 'action active' : 'action'" />
        </div>
      </div>
  </div>
</div>
</template>

<script setup >
import {defineProps, ref, shallowRef, defineEmits} from "vue";
import IconAvatar from "./icons/IconAvatar.vue"
import IconDashboard from "./icons/IconDashboard.vue"
import IconReferentiel from "./icons/IconReferentiel.vue"
import IconValidation  from "./icons/IconValidation.vue"
import IconProposition from "./icons/IconProposition.vue"
import ActionButton from "./ActionButton.vue"
import {useRouter} from "vue-router";
// user informations
const props = defineProps(['user'])
// register all events I want to emit
const emit = defineEmits(['newpage'])
// current tab ex: profil, validation, referentiel, proposition
const currentAction = ref('/')
// each tab label with it path (for the router
const actions = shallowRef([{
  name:"Profil",
  path: '/',
  icon: IconDashboard
},{
  name:"Referentiel",
  path: '/referentiel',
  icon: IconReferentiel
},{
  name:"Validation",
  path: '/validation',
  icon: IconValidation
},{
  name:"Proposition",
  path: '/proposition',
  icon: IconProposition
}]
)
// when changing view
const router = useRouter()
const navigateTo = (path) => {
  emit('newpage', path)
  currentAction.value = path
  router.push(path)
  console.log(path)
}
</script>

<style scoped>
.avatar-group{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 11px;
  margin-top: 35px;
  align-self: center;
  width:120px;
  height:36px;
}
.avatar{
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 37px;
  height: 37px;
  border-radius:50%
}
.user-name{
  flex: none;
  order: 1;
  flex-grow: 0;
  height: 16px;
  margin: 38px 91px 28% 0px;
  font-weight: 500;
  font-size: 10.654px;
  line-height: 15px;
  color: #FFFFFF;
}
.title {
  align-self: start;
  margin: 10px 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}
.actions-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 3.044px 0px 15.22px;
  gap: 12.18px;
  width: 158.29px;
  height: 19px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.sidebar{
  display: flex;
  flex-direction: column;
  background: rgba(3, 0, 119, 0.75);
  box-shadow: 0px 48.704px 48.704px -24.352px rgba(41, 15, 0, 0.56);
  backdrop-filter: blur(60.88px);
  width:195px;
  height:100vh;
  align-self: flex-start;
  align-items:center;
  position: static;
}
.actions{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 3.04px;
  width: 158.29px;
  height: 217.98px;
  margin-top: 35px;
}
.sub-actions{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 0px;
  width: 158.29px;
  height: 195.94px;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.active{
  background: linear-gradient(95.19deg, #6976EF -7.53%, rgba(64, 71, 234, 0.87) 52.7%, rgba(212, 61, 237, 0.34375) 111.1%);
  box-shadow: 0px 3.044px 18.264px rgba(168, 82, 5, 0.3);
}
</style>