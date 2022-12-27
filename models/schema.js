export const schema = {
    "models": {
        "Instructor": {
            "name": "Instructor",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "twitter": {
                    "name": "twitter",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "instagram": {
                    "name": "instagram",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "facebook": {
                    "name": "facebook",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courses": {
                    "name": "courses",
                    "isArray": true,
                    "type": {
                        "model": "CourseInstructor"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "instructor"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Instructors",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Course": {
            "name": "Course",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": {
                        "enum": "CourseCategory"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "isFeatured": {
                    "name": "isFeatured",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "excerpt": {
                    "name": "excerpt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "trainingMethod": {
                    "name": "trainingMethod",
                    "isArray": false,
                    "type": {
                        "enum": "TrainingMethod"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "video": {
                    "name": "video",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "courseDetails": {
                    "name": "courseDetails",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "LearningObjective": {
                    "name": "LearningObjective",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CourseRequirement": {
                    "name": "CourseRequirement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "targetAudience": {
                    "name": "targetAudience",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": {
                        "enum": "Level"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "curriculum": {
                    "name": "curriculum",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Instructors": {
                    "name": "Instructors",
                    "isArray": true,
                    "type": {
                        "model": "CourseInstructor"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "course"
                        ]
                    }
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Courses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CourseInstructor": {
            "name": "CourseInstructor",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "instructorId": {
                    "name": "instructorId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "courseId": {
                    "name": "courseId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "instructor": {
                    "name": "instructor",
                    "isArray": false,
                    "type": {
                        "model": "Instructor"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "instructorId"
                        ]
                    }
                },
                "course": {
                    "name": "course",
                    "isArray": false,
                    "type": {
                        "model": "Course"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "courseId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CourseInstructors",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byInstructor",
                        "fields": [
                            "instructorId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCourse",
                        "fields": [
                            "courseId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "CourseCategory": {
            "name": "CourseCategory",
            "values": [
                "DATA_SCIENCE",
                "GRAPHICS",
                "MICROSOFT_OFFICE",
                "PROGRAMMING",
                "SECURITY",
                "PROJECT_MANAGEMENT",
                "CLOUD",
                "SERVERS"
            ]
        },
        "TrainingMethod": {
            "name": "TrainingMethod",
            "values": [
                "INPERSON",
                "ONLINE",
                "CORPORTATE"
            ]
        },
        "Level": {
            "name": "Level",
            "values": [
                "BEGINNER",
                "INTERMEDIATE",
                "ADVANCE"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.2",
    "version": "e99ee4dea7befee6d7a9546285c3338b"
};