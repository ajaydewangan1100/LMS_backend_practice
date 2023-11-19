import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getLecturesByCourseId,
  removeCourse,
  updateCourse,
  addLectureToCourseById,
  deleteLectureToCourseById,
} from "../controllers/course.controller.js";
import { authorizedRoles, isLoggedin } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router
  .route("/")
  .get(getAllCourses)
  .post(
    isLoggedin,
    authorizedRoles("ADMIN"),
    upload.single("thumbnail"),
    createCourse
  );

router
  .route("/:id")
  .get(isLoggedin, getLecturesByCourseId)
  .put(isLoggedin, authorizedRoles("ADMIN"), updateCourse)
  .delete(isLoggedin, authorizedRoles("ADMIN"), removeCourse)
  .post(
    isLoggedin,
    authorizedRoles("ADMIN"),
    upload.single("lecture"),
    addLectureToCourseById
  );

router
  .route("/:id/:lectureId")
  .delete(isLoggedin, authorizedRoles("ADMIN"), deleteLectureToCourseById);

export default router;
