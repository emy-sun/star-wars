export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._trasformPerson);
    }
  
    async getPerson(id) {
      const person = await this.getResource(`/people/${id}/`);
      return this._trasformPerson(person);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._trasformPlanet);
    }
  
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._trasformPlanet(planet);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    async getStarship(id) {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._trasformStarship(starship);
    }

    _extractionId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _trasformPlanet = (planet) => {
        return {
            id: this._extractionId(planet),
            name: planet.name,
            population: planet.population,
            roationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _trasformPerson = (person) => {
      return {
        id: this._extractionId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      }
    }

    _trasformStarship = (starship) => {
        return {
            id: this._extractionId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }
  }