import express from 'express';
const router = express.Router();
import{registrar,perfil,confirmar,autenticar,olvidePassword,comprobarToken, nuevoPassword, actualizarPerfil,actualizarPassword} from '../controllers/veterinarioController.js'
import checkAuth from '../middleware/authMiddleware.js';


//área pública
router.post('/',registrar)
router.get('/confirm/:token', confirmar)
router.post('/login',autenticar)
router.post('/password-forgotten', olvidePassword)
/* router.get('/password-forgotten:token', comprobarToken)
router.post('/password-forgotten:token', nuevoPassword) */
router.route('/password-forgotten/:token').get(comprobarToken).post(nuevoPassword)

//área privada
router.get('/profile', checkAuth, perfil)
router.put('/profile/:id', checkAuth,actualizarPerfil);
router.put('/update-password',checkAuth,actualizarPassword)



export default router;