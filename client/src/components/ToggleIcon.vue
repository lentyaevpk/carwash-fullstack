<template>
    <div class="toggle-icon" @click="toggleMenu">
        <div :class="['toggle-icon__bar', {'toggle-icon__bar--rotate1': isClicked}]"></div>
        <div :class="['toggle-icon__bar', {'toggle-icon__bar--hidden': isClicked}]"></div>
        <div :class="['toggle-icon__bar', {'toggle-icon__bar--rotate2': isClicked}]"></div>
    </div>
</template>

<script>
export default {
    name: 'ToggleIcon',
    data() {
        return {
            isClicked: false
        }
    },
    methods: {
        toggleMenu() {
            this.isClicked = !this.isClicked;
            this.$emit('toggleMenu');
        }
    }
}
</script>

<style lang="scss">
.toggle-icon {
    cursor: pointer;
    background-color: #fff;
    padding: 10px;

    &__bar {
        width: 50px;
        height: 5px;
        background-color: #333;
        margin: 10px 0;
        transition: 0.4s;

        &--rotate1 {
            transform: rotate(-45deg) translate(-11px, 12px);
        }

        &--hidden {
            opacity: 0;
        }

        &--rotate2 {
            transform: rotate(45deg) translate(-9px, -11px);
        }
    }
}
</style>