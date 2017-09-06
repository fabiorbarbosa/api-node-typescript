"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Person_1 = require("./Models/Person");
const guid_1 = require("./Utils/guid");
class PersonRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    get(req, res, next) {
        let persons = [];
        for (var index = 0; index < 100000; index++) {
            let person = new Person_1.default();
            person.id = guid_1.default.newGuid();
            person.nome = "Fábio Barbosa - " + index;
            person.email = 'fabiobarbosaa@gmail.com';
            persons.push(person);
        }
        res.json(persons);
    }
    getById(req, res, next) {
        res.send('Person: ' + req.params.id);
    }
    init() {
        this.router.get('/', this.get);
        this.router.get('/:id', this.getById);
    }
}
exports.PersonRouter = PersonRouter;
const personRouter = new PersonRouter();
personRouter.init();
exports.default = personRouter.router;
