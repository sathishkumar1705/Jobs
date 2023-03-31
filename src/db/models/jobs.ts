import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";



interface UserAttributes {
    id: number,
    job_title: number,
    job_description: string,
    required_skill: string,
    location: string,
    expericence: number,
    
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}

export interface userInput extends Optional<UserAttributes, "id"> { }

export interface userOutput extends Required<UserAttributes> { }

class Job
    extends Model<UserAttributes, userInput>
    implements UserAttributes {
   


    public id!: number;
    public job_title!: number;
    public job_description!: string;
    public required_skill!: string;
    public location!: string;
    public expericence!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly deleted_at!: Date;
}
Job.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        job_title: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        job_description: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        required_skill: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expericence: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },

    {
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true,
    })

export default Job