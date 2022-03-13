const cors=require("cors");
const corsOptions ={
   origin:'http://127.0.0.1:3000',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const session = require('express-session');
const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();
const passport = require('passport');
const axios=require('axios');
const mongoose = require('mongoose');
app.use(cors(corsOptions))
const http = require('http').createServer(app);

//Database connection
const mongoDB = "mongodb+srv://surveySystem:grp54project@cluster0.rfinc.mongodb.net/survey-system?retryWrites=true&w=majority";
mongoose.connect(mongoDB,).then(() => console.log('database connected')).catch(err => console.log(err))

app.use(express.static(__dirname));
const Survey = require('./models/Survey');
const SurveyComponent = require('./models/SurveyComponent');

app.use(
	session({
		resave: false,
		secret: "grp 55 project",
		saveUninitialized: false,
	})
);

app.use(
	express.urlencoded({
		extended: true,
	})
);


http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/make-form', (req, res) => {
    res.send('alright');
})

app.post('/createSurvery/:id', async (req, res) => {
	try {
        const {title}=req.body;
        const user=req.params.id;
		let newSurvey = new Survey({
            title,
            user,
        });
        newSurvey=await newSurvey.save().then(res=>{
            console.log(res);
        });
	} catch (e) {
		console.log(e);
	}
});

app.post("/addQuestion/:id", async(req, res) => {
    // console.log("req body",req.body);
    const { questionType, questionText, option1, option2, option3, option4 } = req.body;
    try {
		let options;
		if (option1) {
			options = [option1, option2, option3, option4];
		}
		let newQuestion = new SurveyComponent({
			questionType,
			questionText,
			options,
		});
		newQuestion = await newQuestion.save();
		let survey = await Survey.findById(req.params.id);
		survey.surveyQuestions.push(newQuestion);
		await Survey.updateOne(
			{
				_id: survey._id,
			},
			{$push:{surveyQuestions:newQuestion}},  
		);
	} catch (e) {
		console.log(e);
	}
});