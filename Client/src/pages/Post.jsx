import React from 'react';
import {Link} from 'react-router-dom';
import EditIcon from '../images/EditIcon.png';
import DeleteIcon from '../images/DeleteIcon.png';
import Menu from '../components/Menu';

const Post = () => {
  return (
    <div className = 'post'>
      <div className="content">
        <img src="https://www.scripps.org/sparkle-assets/images/mediterraneandiet_web-7ce12493f37a553ff8892a1c8ea600eb.jpg" alt="Mediterranean Diet" />
        <div className="user">
          <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user image" />
          <div className="info">
            <span>Brent</span>
            <p>Posted 3/24/2023</p>
          </div>
          <div className="edit">
            <Link to = {`/compose?edit=2`}>
              <img src={EditIcon} alt="edit" />
            </Link>
            <img src={DeleteIcon} alt="delete" />
          </div>
        </div>
        <h1>
          This is the headling for the post, which will probably be the title, but I'm not 100% sure quite yet.
        </h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id. Diam ut venenatis tellus in metus vulputate eu. Morbi non arcu risus quis varius quam quisque id. Dictumst vestibulum rhoncus est pellentesque elit. Integer quis auctor elit sed vulputate. Mauris augue neque gravida in fermentum et. Amet est placerat in egestas erat imperdiet sed euismod nisi. Vestibulum rhoncus est pellentesque elit. Elementum curabitur vitae nunc sed velit. Commodo elit at imperdiet dui accumsan. Iaculis nunc sed augue lacus viverra vitae. Est placerat in egestas erat. Id velit ut tortor pretium viverra suspendisse potenti. In aliquam sem fringilla ut morbi tincidunt augue. Ligula ullamcorper malesuada proin libero. Nisi vitae suscipit tellus mauris a diam maecenas sed. Orci dapibus ultrices in iaculis. Ipsum nunc aliquet bibendum enim facilisis gravida neque.
          </p>
          <p>
            Sapien et ligula ullamcorper malesuada. Est velit egestas dui id ornare. Et tortor at risus viverra adipiscing at in tellus integer. Venenatis a condimentum vitae sapien pellentesque. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Arcu non odio euismod lacinia at quis risus. Id leo in vitae turpis massa. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Parturient montes nascetur ridiculus mus mauris vitae. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis ut diam. Tristique senectus et netus et malesuada.
          </p>
          <p>
            Sollicitudin nibh sit amet commodo nulla facilisi. Neque egestas congue quisque egestas diam in. Tellus id interdum velit laoreet id donec ultrices tincidunt. Cras pulvinar mattis nunc sed blandit libero volutpat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Eros in cursus turpis massa tincidunt dui ut. Fusce id velit ut tortor pretium viverra. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Gravida dictum fusce ut placerat. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Ipsum a arcu cursus vitae congue. Eros donec ac odio tempor orci dapibus ultrices.
          </p>
          <p>
            Et netus et malesuada fames ac. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Enim nulla aliquet porttitor lacus luctus accumsan. Nunc sed velit dignissim sodales ut eu sem. Mattis rhoncus urna neque viverra justo nec ultrices dui. At ultrices mi tempus imperdiet nulla malesuada. Nascetur ridiculus mus mauris vitae ultricies leo integer. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Odio tempor orci dapibus ultrices in iaculis nunc. Suspendisse faucibus interdum posuere lorem ipsum dolor. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Fringilla urna porttitor rhoncus dolor.
          </p>
          <p>
            Tortor aliquam nulla facilisi cras fermentum odio eu. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Nisl pretium fusce id velit ut. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Justo laoreet sit amet cursus. Vulputate dignissim suspendisse in est ante. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Eget egestas purus viverra accumsan in nisl. Nibh cras pulvinar mattis nunc sed blandit libero. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Post