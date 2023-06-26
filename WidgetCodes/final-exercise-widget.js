document.addEventListener('alpine:init', () => {
    
    Alpine.data('FinalExerciseWidget', function(){

        return {
            sentence : '',
            PopularCars : '',
            Nissanfromck : '',
            MostBlue : '',
            FewestOrange : '',
            PopularModel : '',
            PopularCL : '',
            LeastPopular : '',
            CarsFromTown : '',
            NumberOfCars : '',
            NumberperModel : '',
            PopularColor : '',
            solve() {

           this.PopularCars = mostPopularCar(this.sentence);
           this.Nissanfromck = nissansFromCK(this.sentence);
           this.MostBlue = mostBlueCars(this.sentence);
           this.FewestOrange = fewestOrangeCars(this.sentence);
           this.PopularModel = mostPopularModel(this.sentence);
           this.PopularCL = mostPopularCL(this.sentence);
           this.LeastPopular = leastPopularCF(this.sentence);
           this.CarsFromTown = carsForTown(this.sentence);
           this.NumberOfCars = numberOfCars(this.sentence);
           this.NumberperModel = numberOfCarsPerModel(this.sentence);
           this.PopularColor = mostPopularColor(this.sentence);

                setTimeout(() => {
                    this.sentence = '',
                    this.PopularCars = '',
                    this.Nissanfromck = '',
                    this.MostBlue = '',
                    this.FewestOrange = '',
                    this.PopularModel = '',
                    this.PopularCL = '',
                    this.LeastPopular = '',
                    this.CarsFromTown = '',
                    this.NumberOfCars = '',
                    this.NumberperModel = '',
                    this.PopularColor = ''
                   }, 8000);
            }
        }
    });
})