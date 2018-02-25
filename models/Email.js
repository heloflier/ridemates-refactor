
// ============================================================================
//                     			Emails Schema        
// ============================================================================

const mongoose				= require('mongoose');
const Schema				= mongoose.Schema;
const RecipientSchema		= require('./Recipient');

const EmailSchema = new Schema({
			title: 			String,
			body:  			String,
			dateSent: 		Date,
			lastResponded: 	Date,
			recipients: [RecipientSchema],
			yes: {
				type: Number,
				default: 0
			},
			no: {
				type: Number,
				default: 0
			},
			_user: {
				type: Schema.Types.ObjectId, 
				ref: 'User'
			}
})

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;