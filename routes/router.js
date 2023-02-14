const express = require('express');
const pageController = require('../controllers/pagecontroller');
const roomController = require('../controllers/roomcontroller');
const taskController = require('../controllers/taskcontroller');

const router = express.Router();

//PAGE CONTROLLER
    //Tworzenie pokoju lub dołączenie do pokoju

router.get('/', pageController.home);

    //Tworzenie pokoju - /host
        //GET - Widok konfiguracji pokoju
        //POST - Przesłanie danych pokoju i przesłanie widoku hosta

router.get('/host', pageController.host);
router.post('/host', pageController.hostpanel);

    //Dołączenie do pokoju - /client
        //GET - Widok wyboru pokoju
        //POST - Przesłanie kodu pokoju i przesłanie widoku klienta

router.get('/client', pageController.client);
router.post('/client', pageController.clientpanel);

//APPLICATION CONTROLLER
    //Pokoje - /host/room
        //GET - pobranie wszystkich pokoji /host/room, pobranie jednego /host/room/:id
        //POST - dodanie pokoju /host/room
        //PATCH - modyfikacja pokoju /host/room/:id
        //DELETE - usuwanie pokoju /host/room/:id

router.get('/host/room', roomController.getrooms);
router.get('/host/room/:id', roomController.getroom);
router.post('/host/room', roomController.createroom);
router.patch('/host/room/:id', roomController.patchroom);
router.delete('/host/room/:id', roomController.deleteroom);

    //Zadania - /host/task
        //GET - pobranie wszystkich zadań /host/task, pobranie jednego /host/task/:id
        //POST - dodanie zadania /host/task
        //PATCH - modyfikacja zadania /host/task/:id
        //DELETE - usuwanie zadania /host/task/:id

router.get('/host/task', taskController.gettasks);
router.get('/host/task/:id', taskController.gettask);
router.post('/host/task', taskController.createtask);
router.patch('/host/task/:id', taskController.patchtask);
router.delete('/host/task/:id', taskController.deletetask);

module.exports = router;