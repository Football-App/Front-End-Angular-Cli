import { Team } from './team';
import { StadiumInfo } from './stadiuminfo';

export class Partido {
    iid : number;
	sdescription : String;
	tplaydate : Date;
	tplaytime : Date;
	sresult : String;
	sscore : String;
	iredCards : number;
	iutcoffset : number;
	iyellowCards : number;
	team1 : Team;
	team2 : Team;
	stadiumInfo : StadiumInfo;
	
}
