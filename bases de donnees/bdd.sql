Utilisateur
	id
	nom
	prenom
	email
	motdepasse

Region
	id
	nomRegion
	description

Attractions 
	id
	nomAttraction
	typeAttraction (ex: parc national,plage,site touristique,etc)
	region{
		id
		nom
	}
	photo

detailsAttractions
	id
	Attraction{
		id
		nomAttraction
		typeAttraction (ex: parc national,plage,site touristique,etc)
		region{
			id
			nom
		}
	photo	
	}
	description
	photo
	video
	
	