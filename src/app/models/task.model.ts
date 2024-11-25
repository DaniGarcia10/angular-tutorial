export enum TaskStatus{
    COMPLETED="C",
    IN_PROGRESS="IP",
    PENDING="P"
}

export enum TaskPriority{
    HIGH="H",
    MEDIUM="M",
    LOW="L"
}

export class Task {
    lowerPriority() {
      throw new Error('Method not implemented.');
    }
    id:number;
    name:string;
    description:string;
    priority:TaskPriority;
    status:TaskStatus;
    creationDate:Date;
    expirationDate:Date;
    isDelete:boolean;

    constructor (id:number,name:string,description:string,priority:TaskPriority,status:TaskStatus,creationDate:Date,expirationDate:Date,isDelete:boolean){
        this.id = id;
        this.name = name;
        this.description=description;
        this.priority=priority;
        this.status = status;
        this.creationDate = creationDate;
        this.expirationDate =expirationDate;
        this.isDelete = isDelete;
    }

    getStatusText():string{
        let text="";
        switch(this.status){
            case "IP": text="En proceso";break;
            case "C": text="Realizada"; break;
            case "P": text="Pendiente";break;
        }
        return text;
    }

    getPriorityText():string{
        switch(this.priority){
            case "H": return "Alta";break;
            case "M": return "Media"; break;
            case "L": return "Baja";break;
            default: return "";
        }
    }

    getPriorityColor(){
        switch(this.priority){
            case "H": return "red";break;
            case "M": return "blue"; break;
            case "L": return "black";break;
            default: return "";
        }
    }

}