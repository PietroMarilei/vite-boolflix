<script>
export default {
  data() {
    return {
      greeting: 'Hello World!',

    }
  },
  methods: {

  },
}
</script>

<template>
  <hr>
  <footer>
    <div class="container">
      <p>Questions ? Call +39(00567400) </p>

      <div class="faq_list">
        <ul>
          <li>FAQ</li>
          <li>Investor relations</li>
          <li>Why to watch</li>
          <li>Corporate Information</li>
          <li>Netflix original</li>
          <li>Business Credentials</li>         
        </ul>

        <ul>
            <li>Help career</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Contact us</li>
                  
          </ul>

          <ul>
            <li>Account</li>
            <li>Redeem of cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>                   
          </ul>

          <ul>
              <li>Media Career</li>
              <li>Buy gift cards</li>
              <li>Cookies preferencies</li>
              <li>Legal Notets</li>                   
            </ul>
      </div>
    </div>

  </footer>
</template>

<style lang="scss" scoped>
hr {
  border: 1px solid rgb(61, 54, 54);
}

footer {
  background-color: rgb(24, 24, 24);
  padding: 1rem;

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .faq_list {
    display: flex;
    justify-content: space-between;

    ul {
      margin: 1rem;
      font-size: 0.9rem;
      li{
        margin: 0.3rem 0;
      }
    }
  }
}</style>