<style lang="scss">

/* $primary_font: Montserrat, sans-serif; */
$primary_font: Bebas Neue, cursive;
$secondary_font: Poppins, sans-serif;

.titleLg, .title, .titleSm {
    font-family: $primary_font;
}

.titleLg {
    font-size: 2.5rem;
}   

.title {
    font-size: 2rem;
}

.titleSm {
    font-size: 1.75rem;
}

.textLg, .text, .textSm {
    font-family: $secondary_font;
    font-weight: 100;
}

.textLg {
    font-size: 1.25rem;
    font-weight: 200;
}

.text {
    font-size: 1rem;
}

.textSm {
    font-size: .9rem;
}

@media (min-width: 768px) {
    .titleLg {
        font-size: 3rem;
    }
    .title {
        font-size: 2.5rem;
    }
    .title {
        font-size: 2rem;
    }
}

@media (min-width: 1200px) {
    .titleLg {
        font-size: 4rem;
    }
}
</style>