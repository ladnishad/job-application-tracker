import { addNewApplication,
         getApplications,
         getSingleApplication,
         updateApplication,
         deleteApplicaion} from '../controllers/JobsControllers'

const routes = (app) => {
  app.route('/Application')
  .get(getApplications)

  .post(addNewApplication)

  app.route('/Application/:ApplicationId')
    .get(getSingleApplication)
    .put(updateApplication)
    .delete(deleteApplicaion)
}

export default routes
