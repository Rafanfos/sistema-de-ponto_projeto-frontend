import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { StudentsTableStyle } from "./style";

export const StudentsTable = () => {
  return (
    <StudentsTableStyle>
      <table>
        <thead>
          <tr>
            <th>
              <h4>Nome</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>

            <th>
              <h4>Último Registro</h4>
              <button>
                <MdKeyboardArrowUp />
              </button>
            </th>

            <th>
              <h4>Impedimentos</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>

            <th>
              <h4>Nota de Presença</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>

            <th>
              <h4>Status</h4>
              <button>
                <MdKeyboardArrowDown />
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <VscCircleLargeOutline />
              <h3>Gabriel Garcia</h3>
            </td>

            <td>
              <p>14:01 31/10/22</p>
            </td>

            <td>
              <p className="somethingWrong">Com impedimentos</p>
            </td>

            <td>
              <p className="allRigth">100%</p>
            </td>

            <td>
              <p className="allRigth">Conforme</p>
            </td>
          </tr>

          <tr>
            <td>
              <VscCircleLargeOutline />
              <h3>Gabriel Ogawa</h3>
            </td>

            <td>
              <p>14:01 31/10/22</p>
            </td>

            <td>
              <p>Sem impedimentos</p>
            </td>

            <td>
              <p className="allRigth">100%</p>
            </td>

            <td>
              <p className="allRigth">Conforme</p>
            </td>
          </tr>

          <tr>
            <td>
              <VscCircleLargeOutline />
              <h3>Leandro</h3>
            </td>

            <td>
              <p>14:01 31/10/22</p>
            </td>

            <td>
              <p>Sem impedimentos</p>
            </td>

            <td>
              <p className="allRigth">100%</p>
            </td>

            <td>
              <p className="allRigth">Conforme</p>
            </td>
          </tr>

          <tr>
            <td>
              <VscCircleLargeOutline />
              <h3>Lucas Kauan</h3>
            </td>

            <td>
              <p>14:01 31/10/22</p>
            </td>

            <td>
              <p>Sem impedimentos</p>
            </td>

            <td>
              <p className="allRigth">92%</p>
            </td>

            <td>
              <p className="allRigth">Conforme</p>
            </td>
          </tr>

          <tr>
            <td>
              <VscCircleLargeOutline />
              <h3>Lucas Magalhães</h3>
            </td>

            <td>
              <p>14:01 31/10/22</p>
            </td>

            <td>
              <p>Sem impedimentos</p>
            </td>

            <td>
              <p className="somethingWrong">67%</p>
            </td>

            <td>
              <p className="somethingWrong">Faltante</p>
            </td>
          </tr>

          <tr>
            <td>
              <VscCircleLargeOutline />
              <h3>Rafael Barroso</h3>
            </td>

            <td>
              <p>14:01 31/10/22</p>
            </td>

            <td>
              <p>Sem impedimentos</p>
            </td>

            <td>
              <p className="somethingWrong">70%</p>
            </td>

            <td>
              <p className="somethingWrong">Faltante</p>
            </td>
          </tr>
        </tbody>
      </table>
    </StudentsTableStyle>
  );
};
