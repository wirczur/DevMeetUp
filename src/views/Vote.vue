<template>
  <div class="vote">
    <VoteOptions>
      <template v-slot:item="{ todoItem }">
        <el-button @click="clickHandler(todoItem.value)">
          <i :class="todoItem.icon" />
        </el-button>
      </template>
    </VoteOptions>
  </div>
</template>

<script>
import VoteOptions from '@/components/VoteOptions';

export default {
  name: 'Vote',
  components: {
    VoteOptions,
  },
  data() {
    return {
    };
  },
  methods: {
    clickHandler(value) {
      console.log(value);
    },
  },
};
</script>
