<template>
  <div class="vote-option">
    <slot
      v-for="element in elements"
      name="item"
      :todo-item="element"
    >
      <el-button @click="clickHandler(todoItem.value)">
        <i :class="todoItem.icon" />
      </el-button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'VoteOptions',
  data() {
    return {
      elements: [
        {
          id: 0,
          icon: 'fas fa-heart-broken',
          value: 0,
        },
        {
          id: 0,
          icon: 'fas fa-heart',
          value: 0.5,
        },
        {
          id: 0,
          icon: 'fas fa-heartbeat',
          value: 1,
        },
      ],
    };
  },
  methods: {
    clickHandler(value) {
      console.log(value);
    },
  },
};
</script>
